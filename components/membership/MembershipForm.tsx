"use client";
// components/membership/MembershipForm.tsx
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, CheckCircle, Upload, Camera } from "lucide-react";
import { DISTRICTS, ZONES } from "@/lib/constants";
import { generateApplicationId } from "@/lib/utils";
import type { MembershipFormData } from "@/types";
import axios from "axios";

export default function MembershipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [signaturePreview, setSignaturePreview] = useState<string | null>(null);
  const [generatedAppId, setGeneratedAppId] = useState("");
  const photoInputRef = useRef<HTMLInputElement>(null);
  const signatureInputRef = useRef<HTMLInputElement>(null);
const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<MembershipFormData>();
  // Generate unique application ID on component mount
  useEffect(() => {
    const generateUniqueId = async () => {
      try {
        // Get the latest application ID from the database
        const response = await axios.get("http://localhost:5000/api/members/latest-id");
        const latestId = response.data.latestId || "NCIO0000";
        
        // Generate the next ID
        const nextId = generateApplicationId(latestId);
        setGeneratedAppId(nextId);
        setValue("applicationId", nextId);
      } catch (error) {
        console.error("Error generating application ID:", error);
        // Fallback to local generation if API fails
        const fallbackId = generateApplicationId("NCIO0000");
        setGeneratedAppId(fallbackId);
        setValue("applicationId", fallbackId);
      }
    };

   generateUniqueId();
  }, [setValue]);

  const membershipType = watch("membershipType");

  useEffect(() => {
    if (membershipType === "STATE") {
      setValue("district", "");
    }
  }, [membershipType, setValue]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPhotoPreview(base64String);
        setValue("photo", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignatureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setSignaturePreview(base64String);
        setValue("signature", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

const onSubmit = async (data: MembershipFormData) => {
    try {
      // Add the generated application ID to the data
      const submissionData = {
        ...data,
        applicationId: generatedAppId,
      };

      const response = await axios.post(
        "http://localhost:5000/api/members",
        submissionData
      );

      setAppId(response.data.memberId || response.data.applicationId || generatedAppId);
      setSubmitted(true);

    } catch (error) {
      console.error(error);
      alert("Failed to submit application");
    }
  };

  const inp = (hasError?: boolean) =>
    `w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e]/40 transition-colors ${
      hasError ? "border-red-400 bg-red-50" : "border-gray-300 focus:border-[#1a237e]"
    }`;

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-10 text-center">
        <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
        <p className="text-green-700 mb-6">Your application has been received successfully.</p>
        <div className="bg-white border-2 border-green-300 rounded-xl p-5 inline-block mb-6">
          <p className="text-sm text-gray-500 mb-1">Your Application ID</p>
          <p className="text-2xl font-bold text-[#1a237e]">{appId}</p>
        </div>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Please save this Application ID. You will receive an email confirmation shortly.
          Our team will review your application within 7 working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Application ID Display */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-blue-700 font-medium">Application ID</p>
          <p className="text-xs text-blue-600">This ID will be assigned to your application</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg border border-blue-300">
          <span className="font-mono font-bold text-[#1a237e]">{generatedAppId || "Loading..."}</span>
        </div>
      </div>

      {/* Personal Details */}
      <div>
        <h3 className="text-lg font-semibold text-[#1a237e] border-b border-[#1a237e]/20 pb-2 mb-5">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input {...register("fullName", { required: true })} className={inp(!!errors.fullName)} placeholder="Enter your full name" />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">Full name is required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
            <input type="date" {...register("dateOfBirth", { required: true })} className={inp(!!errors.dateOfBirth)} />
            {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">Date of birth is required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name *</label>
            <input {...register("fatherName", { required: true })} className={inp(!!errors.fatherName)} placeholder="Father's full name" />
            {errors.fatherName && <p className="text-red-500 text-xs mt-1">Father's name is required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Guardian's Name</label>
            <input {...register("guardianName")} className={inp()} placeholder="Guardian's name (if applicable)" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
            <select {...register("gender", { required: true })} className={inp(!!errors.gender)}>
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-xs mt-1">Gender is required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nationality *</label>
            <input {...register("nationality", { required: true })} defaultValue="Indian" className={inp(!!errors.nationality)} placeholder="Your nationality" />
            {errors.nationality && <p className="text-red-500 text-xs mt-1">Nationality is required</p>}
          </div>
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="text-lg font-semibold text-[#1a237e] border-b border-[#1a237e]/20 pb-2 mb-5">
          Address
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Door No. *</label>
            <input {...register("doorNo", { required: true })} className={inp(!!errors.doorNo)} placeholder="Door / Flat No." />
            {errors.doorNo && <p className="text-red-500 text-xs mt-1">Door number is required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Street / Area *</label>
            <input {...register("street", { required: true })} className={inp(!!errors.street)} placeholder="Street name" />
            {errors.street && <p className="text-red-500 text-xs mt-1">Street is required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City / Town *</label>
            <input {...register("city", { required: true })} className={inp(!!errors.city)} placeholder="City or town" />
            {errors.city && <p className="text-red-500 text-xs mt-1">City is required</p>}
          </div>
         <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              District {membershipType !== "STATE" && "*"}
            </label>
            <select
              {...register("district", { required: membershipType !== "STATE" })}
              className={inp(!!errors.district)}
              disabled={membershipType === "STATE"}
            >
              <option value="">Select district</option>
              {DISTRICTS.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            {membershipType === "STATE" && (
              <p className="text-xs text-gray-400 mt-1">Not required for State level members</p>
            )}
            {errors.district && <p className="text-red-500 text-xs mt-1">District is required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zone *</label>
            <select {...register("zone", { required: true })} className={inp(!!errors.zone)}>
              <option value="">Select zone</option>
              {ZONES.map((z) => <option key={z} value={z}>{z}</option>)}
            </select>
            {errors.zone && <p className="text-red-500 text-xs mt-1">Zone is required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
            <input {...register("state")} defaultValue="Tamil Nadu" className={inp()} readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code *</label>
            <input {...register("pinCode", { required: true, minLength: 6, maxLength: 6 })} className={inp(!!errors.pinCode)} placeholder="6-digit pin code" maxLength={6} />
            {errors.pinCode && <p className="text-red-500 text-xs mt-1">Valid 6-digit pin code required</p>}
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div>
        <h3 className="text-lg font-semibold text-[#1a237e] border-b border-[#1a237e]/20 pb-2 mb-5">
          Contact Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input {...register("phone", { required: true, minLength: 10, maxLength: 10 })} className={inp(!!errors.phone)} placeholder="10-digit mobile number" maxLength={10} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">Valid 10-digit phone number required</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input type="email" {...register("email", { required: true })} className={inp(!!errors.email)} placeholder="your@email.com" />
            {errors.email && <p className="text-red-500 text-xs mt-1">Valid email is required</p>}
          </div>
        </div>
      </div>

      {/* Identity, Education & Membership */}
      <div>
        <h3 className="text-lg font-semibold text-[#1a237e] border-b border-[#1a237e]/20 pb-2 mb-5">
          Identity, Education & Membership
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Aadhar Number *</label>
            <input {...register("aadharNumber", { required: true, minLength: 12, maxLength: 12 })} className={inp(!!errors.aadharNumber)} placeholder="12-digit Aadhar number" maxLength={12} />
            {errors.aadharNumber && <p className="text-red-500 text-xs mt-1">Valid 12-digit Aadhar number required</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Educational Qualification *</label>
            <select {...register("education", { required: true })} className={inp(!!errors.education)}>
              <option value="">Select qualification</option>
              <option value="10th Pass">10th Pass</option>
              <option value="12th Pass">12th Pass</option>
              <option value="Diploma">Diploma</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="Doctorate">Doctorate</option>
              <option value="Other">Other</option>
            </select>
            {errors.education && <p className="text-red-500 text-xs mt-1">Educational qualification is required</p>}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Write Your Full Qualification <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <textarea 
              {...register("qualificationDetails")} 
              rows={3}
              className={inp()} 
              placeholder="Please describe your educational background in detail. Example: 
- Completed B.Sc. in Computer Science from XYZ University, Chennai (2020)
- Completed M.A. in Social Work from ABC College, Coimbatore (2022)
- Diploma in Cyber Law from ..."
            />
            <p className="text-xs text-gray-400 mt-1">Include degrees, diplomas, certificates, institutions, and year of completion (Optional)</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Membership Type *</label>
            <select {...register("membershipType", { required: true })} className={inp(!!errors.membershipType)}>
              <option value="">Select membership type</option>
              <option value="DISTRICT">District Member</option>
              <option value="STATE">State Member</option>
              <option value="ZONAL">Zonal Member</option>
            </select>
            {errors.membershipType && <p className="text-red-500 text-xs mt-1">Please select membership type</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Previous Membership / Organization <span className="text-gray-400 font-normal">(Optional)</span></label>
            <input {...register("previousMembership")} className={inp()} placeholder="Any previous NGO or organization membership" />
          </div>
        </div>
      </div>

      {/* Photo Upload */}
      <div>
        <h3 className="text-lg font-semibold text-[#1a237e] border-b border-[#1a237e]/20 pb-2 mb-5">
          Passport Size Photo
        </h3>
        <div className="space-y-4">
          <input
            type="file"
            accept="image/*"
            ref={photoInputRef}
            onChange={handlePhotoUpload}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => photoInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <Upload size={18} /> Upload Photo
          </button>
          {photoPreview && (
            <div className="mt-3">
              <img src={photoPreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg border border-gray-300" />
              <p className="text-xs text-gray-500 mt-1">Photo preview</p>
            </div>
          )}
          <p className="text-xs text-gray-500">Please upload a recent passport-size photograph (JPG or PNG, max 2MB)</p>
        </div>
      </div>

      {/* Signature Upload */}
      <div>
        <h3 className="text-lg font-semibold text-[#1a237e] border-b border-[#1a237e]/20 pb-2 mb-5">
          Member Signature
        </h3>
        <div className="space-y-4">
          <input
            type="file"
            accept="image/*"
            ref={signatureInputRef}
            onChange={handleSignatureUpload}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => signatureInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <Camera size={18} /> Upload Signature
          </button>
          {signaturePreview && (
            <div className="mt-3">
              <img src={signaturePreview} alt="Signature Preview" className="w-48 h-24 object-contain border border-gray-300 rounded-lg bg-white" />
              <p className="text-xs text-gray-500 mt-1">Signature preview</p>
            </div>
          )}
          <p className="text-xs text-gray-500">Please sign on white paper and upload a clear image of your signature</p>
        </div>
      </div>

      {/* Declaration */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...register("declaration", { required: true })} className="mt-1 w-4 h-4 accent-[#1a237e]" />
          <span className="text-sm text-gray-700">
            I hereby declare that all the information provided in this application is true and correct to the best of my knowledge.
            I understand that any false information may result in rejection or cancellation of my NCIO membership.
          </span>
        </label>
        {errors.declaration && <p className="text-red-500 text-xs mt-2">You must accept the declaration to proceed</p>}
      </div>

      {/* Hidden field for application ID */}
      <input type="hidden" {...register("applicationId")} value={generatedAppId} />

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || !generatedAppId}
        className="w-full bg-[#1a237e] hover:bg-[#0d1440] disabled:opacity-60 text-white font-bold py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <><Loader2 size={20} className="animate-spin" /> Submitting Application...</>
        ) : (
          "Submit Membership Application"
        )}
      </button>
    </form>
  );
}