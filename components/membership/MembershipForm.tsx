"use client";
// components/membership/MembershipForm.tsx
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, CheckCircle, XCircle, Upload, Camera } from "lucide-react";
import { DISTRICTS, ZONES } from "@/lib/constants";
import { generateApplicationId } from "@/lib/utils";
import type { MembershipFormData } from "@/types";
import axios from "axios";


// Error toast card — shown instead of alert()
function Toast({ toast }: { toast: any }) {
    if (!toast) return null;
  return (
    <div className="fixed top-4 right-4 left-4 sm:left-auto z-[60] flex justify-center sm:justify-end">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-5 flex flex-col items-center gap-1.5 w-full max-w-[300px]">
        <div className="w-12 h-12 rounded-full border-2 border-dashed border-red-300 flex items-center justify-center mb-1">
          <XCircle size={26} className="text-red-500" />
        </div>
        <p className="font-bold text-base text-red-600">Failed</p>
        <p className="text-gray-400 text-xs text-center leading-relaxed">{toast.message}</p>
      </div>
    </div>
  );
}

export default function MembershipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [signaturePreview, setSignaturePreview] = useState<string | null>(null);
  const [generatedAppId, setGeneratedAppId] = useState("");
  const photoInputRef = useRef<HTMLInputElement>(null);
  const signatureInputRef = useRef<HTMLInputElement>(null);
  // const [submitted, setSubmitted] = useState(false);
  // const [appId, setAppId] = useState("");
const [toast, setToast] = useState<any>(null);
  const [submittedData, setSubmittedData] = useState<any>(null);
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
        const response = await axios.get("http://localhost:5000/api/members/latest-id");
        const latestId = response.data.latestId || "NCIO0000";
        const nextId = generateApplicationId(latestId);
        setGeneratedAppId(nextId);
        setValue("applicationId", nextId);
      } catch (error) {
        console.error("Error generating application ID:", error);
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
  // setSubmittedData(data);
 const onSubmit = async (data: MembershipFormData) => {
    try {
      const submissionData = {
        ...data,
        applicationId: generatedAppId,
      };

      const response = await axios.post(
        "http://localhost:5000/api/members",
        submissionData
      );

      setSubmittedData(data);  // ← இங்க இருக்கணும்
      setAppId(response.data.memberId || response.data.applicationId || generatedAppId);
      setSubmitted(true);
    } catch (error: any) {
      console.error(error);
      const message = error?.response?.data?.error || "Failed to submit application. Please try again.";
      setToast({ message });
      setTimeout(() => setToast(null), 4000);
    }
  };
  const inp = (hasError?: boolean) =>
    `w-full rounded-xl border bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-800 shadow-sm transition-all placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/35 ${
      hasError
        ? "border-red-400 bg-red-50"
        : "border-slate-200 focus:border-[#b8860b]"
    }`;

 if (submitted) {
  return (
    <div className="flex items-center justify-center min-h-[500px] p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-green-400 via-emerald-300 to-green-500" />
          <div className="p-8 text-center">

            {/* Success Icon */}
            <div className="relative inline-flex mb-5">
              <div className="w-20 h-20 rounded-full border-4 border-dashed border-green-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-500" strokeWidth={2} />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-1">Success!</h2>
            <p className="text-gray-400 text-sm mb-6">
              Your application has been submitted.<br />
              We're sending you a confirmation email.
            </p>

            {/* Application ID */}
            <div className="bg-gradient-to-br from-[#06183d] to-[#1a237e] rounded-2xl p-5 mb-6 shadow-lg">
              <p className="text-blue-300 text-xs uppercase tracking-widest mb-2">Application ID</p>
              <p className="text-white font-mono font-bold text-xl tracking-wider">{appId}</p>
            </div>

            {/* Submitted Details */}
            <div className="text-left space-y-1 mb-6">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Submitted Details</p>
              {[
                ['Name', submittedData?.fullName],
                ['Phone', submittedData?.phone],
                ['Email', submittedData?.email],
                ['District', submittedData?.district || '-'],
                ['Zone', submittedData?.zone],
                ['Membership', submittedData?.membershipType],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-xs text-gray-400">{label}</span>
                  <span className="text-xs font-semibold text-gray-700">{value || '-'}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
              <p className="text-amber-700 text-xs leading-relaxed">
                Our team will review your application within <strong>7 working days</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 return (
    <>
      <Toast toast={toast} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
        {/* Application ID Display */}
      {/* Application ID Display */}
      <div className="flex flex-col gap-3 sm:gap-4 rounded-2xl border border-[#d4af37]/40 bg-[#fff9e8] p-3 sm:p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs sm:text-sm font-bold text-[#06183d]">Application ID</p>
          <p className="text-[10px] sm:text-xs text-[#8b6b1f]">This ID will be assigned to your application</p>
        </div>
        <div className="rounded-xl border border-[#d4af37]/50 bg-white px-3 sm:px-4 py-1.5 sm:py-2">
          <span className="font-mono font-bold text-[#06183d] text-sm sm:text-base">{generatedAppId || "Loading..."}</span>
        </div>
      </div>

      {/* Personal Details */}
      <div>
        <h3 className="mb-4 sm:mb-5 border-b border-[#d4af37]/40 pb-2 sm:pb-3 text-base sm:text-lg font-bold text-[#06183d]">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Full Name *</label>
            <input {...register("fullName", { required: true })} className={inp(!!errors.fullName)} placeholder="Enter your full name" />
            {errors.fullName && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Full name is required</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Date of Birth *</label>
            <input type="date" {...register("dateOfBirth", { required: true })} className={inp(!!errors.dateOfBirth)} />
            {errors.dateOfBirth && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Date of birth is required</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Father's Name *</label>
            <input {...register("fatherName", { required: true })} className={inp(!!errors.fatherName)} placeholder="Father's full name" />
            {errors.fatherName && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Father's name is required</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Guardian's Name</label>
            <input {...register("guardianName")} className={inp()} placeholder="Guardian's name (if applicable)" />
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Gender *</label>
            <select {...register("gender", { required: true })} className={inp(!!errors.gender)}>
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Gender is required</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Nationality *</label>
            <input {...register("nationality", { required: true })} defaultValue="Indian" className={inp(!!errors.nationality)} placeholder="Your nationality" />
            {errors.nationality && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Nationality is required</p>}
          </div>
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="mb-4 sm:mb-5 border-b border-[#d4af37]/40 pb-2 sm:pb-3 text-base sm:text-lg font-bold text-[#06183d]">
          Address
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Door No. *</label>
            <input {...register("doorNo", { required: true })} className={inp(!!errors.doorNo)} placeholder="Door / Flat No." />
            {errors.doorNo && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Door number is required</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Street / Area *</label>
            <input {...register("street", { required: true })} className={inp(!!errors.street)} placeholder="Street name" />
            {errors.street && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Street is required</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">City / Town *</label>
            <input {...register("city", { required: true })} className={inp(!!errors.city)} placeholder="City or town" />
            {errors.city && <p className="text-red-500 text-[10px] sm:text-xs mt-1">City is required</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">
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
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Not required for State level members</p>
            )}
            {errors.district && <p className="text-red-500 text-[10px] sm:text-xs mt-1">District is required</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Zone *</label>
            <select {...register("zone", { required: true })} className={inp(!!errors.zone)}>
              <option value="">Select zone</option>
              {ZONES.map((z) => <option key={z} value={z}>{z}</option>)}
            </select>
            {errors.zone && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Zone is required</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">State *</label>
            <input {...register("state")} defaultValue="Tamil Nadu" className={inp()} readOnly />
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Pin Code *</label>
            <input {...register("pinCode", { required: true, minLength: 6, maxLength: 6 })} className={inp(!!errors.pinCode)} placeholder="6-digit pin code" maxLength={6} />
            {errors.pinCode && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Valid 6-digit pin code required</p>}
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div>
        <h3 className="mb-4 sm:mb-5 border-b border-[#d4af37]/40 pb-2 sm:pb-3 text-base sm:text-lg font-bold text-[#06183d]">
          Contact Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Phone Number *</label>
            <input {...register("phone", { required: true, minLength: 10, maxLength: 10 })} className={inp(!!errors.phone)} placeholder="10-digit mobile number" maxLength={10} />
            {errors.phone && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Valid 10-digit phone number required</p>}
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Email Address *</label>
            <input type="email" {...register("email", { required: true })} className={inp(!!errors.email)} placeholder="your@email.com" />
            {errors.email && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Valid email is required</p>}
          </div>
        </div>
      </div>

      {/* Identity, Education & Membership */}
      <div>
        <h3 className="mb-4 sm:mb-5 border-b border-[#d4af37]/40 pb-2 sm:pb-3 text-base sm:text-lg font-bold text-[#06183d]">
          Identity, Education & Membership
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Aadhar Number *</label>
            <input {...register("aadharNumber", { required: true, minLength: 12, maxLength: 12 })} className={inp(!!errors.aadharNumber)} placeholder="12-digit Aadhar number" maxLength={12} />
            {errors.aadharNumber && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Valid 12-digit Aadhar number required</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Educational Qualification *</label>
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
            {errors.education && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Educational qualification is required</p>}
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">
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
            <p className="text-[10px] sm:text-xs text-gray-400 mt-1">Include degrees, diplomas, certificates, institutions, and year of completion (Optional)</p>
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Membership Type *</label>
            <select {...register("membershipType", { required: true })} className={inp(!!errors.membershipType)}>
              <option value="">Select membership type</option>
              <option value="DISTRICT">District Member</option>
              <option value="STATE">State Member</option>
              <option value="ZONAL">Zonal Member</option>
            </select>
            {errors.membershipType && <p className="text-red-500 text-[10px] sm:text-xs mt-1">Please select membership type</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs sm:text-sm font-semibold text-slate-700">Previous Membership / Organization <span className="font-normal text-slate-400">(Optional)</span></label>
            <input {...register("previousMembership")} className={inp()} placeholder="Any previous NGO or organization membership" />
          </div>
        </div>
      </div>

      {/* Photo Upload */}
      <div>
        <h3 className="mb-4 sm:mb-5 border-b border-[#d4af37]/40 pb-2 sm:pb-3 text-base sm:text-lg font-bold text-[#06183d]">
          Passport Size Photo
        </h3>
        <div className="space-y-3 sm:space-y-4">
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
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#fff9e8] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-[#06183d] transition-all hover:border-[#b8860b] hover:bg-[#fff3c4]"
          >
            <Upload size={16} /> Upload Photo
          </button>
          {photoPreview && (
            <div className="mt-2 sm:mt-3">
              <img src={photoPreview} alt="Preview" className="h-24 sm:h-28 md:h-32 w-24 sm:w-28 md:w-32 rounded-2xl border border-[#d4af37]/40 object-cover shadow-sm" />
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-500">Photo preview</p>
            </div>
          )}
          <p className="text-[10px] sm:text-xs text-gray-500">Please upload a recent passport-size photograph (JPG or PNG, max 2MB)</p>
        </div>
      </div>

      {/* Signature Upload */}
      <div>
        <h3 className="mb-4 sm:mb-5 border-b border-[#d4af37]/40 pb-2 sm:pb-3 text-base sm:text-lg font-bold text-[#06183d]">
          Member Signature
        </h3>
        <div className="space-y-3 sm:space-y-4">
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
            className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#fff9e8] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-[#06183d] transition-all hover:border-[#b8860b] hover:bg-[#fff3c4]"
          >
            <Camera size={16} /> Upload Signature
          </button>
          {signaturePreview && (
            <div className="mt-2 sm:mt-3">
              <img src={signaturePreview} alt="Signature Preview" className="h-16 sm:h-20 md:h-24 w-32 sm:w-40 md:w-48 rounded-2xl border border-[#d4af37]/40 bg-white object-contain shadow-sm" />
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-500">Signature preview</p>
            </div>
          )}
          <p className="text-[10px] sm:text-xs text-gray-500">Please sign on white paper and upload a clear image of your signature</p>
        </div>
      </div>

      {/* Declaration */}
      <div className="rounded-2xl border border-[#d4af37]/35 bg-[#fbfaf7] p-3 sm:p-4 md:p-5">
        <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
          <input type="checkbox" {...register("declaration", { required: true })} className="mt-0.5 sm:mt-1 w-3.5 sm:w-4 h-3.5 sm:h-4 accent-[#1a237e]" />
          <span className="text-xs sm:text-sm leading-5 sm:leading-6 text-slate-700">
            I hereby declare that all the information provided in this application is true and correct to the best of my knowledge.
            I understand that any false information may result in rejection or cancellation of my NCIO membership.
          </span>
        </label>
        {errors.declaration && <p className="text-red-500 text-[10px] sm:text-xs mt-1.5 sm:mt-2">You must accept the declaration to proceed</p>}
      </div>

      {/* Hidden field for application ID */}
      <input type="hidden" {...register("applicationId")} value={generatedAppId} />

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || !generatedAppId}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#06183d] via-[#0a2459] to-[#06183d] py-3.5 sm:py-4 text-base sm:text-lg font-bold text-white shadow-[0_18px_45px_rgba(4,13,38,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(4,13,38,0.28)] disabled:translate-y-0 disabled:opacity-60"
      >
        {isSubmitting ? (
          <><Loader2 size={18} className="sm:w-5 sm:h-5 animate-spin" /> Submitting Application...</>
        ) : (
          "Submit Membership Application"
        )}
     </button>
      </form>
    </>
  );
}