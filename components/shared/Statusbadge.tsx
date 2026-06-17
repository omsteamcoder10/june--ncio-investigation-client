// components/shared/StatusBadge.tsx
type Status = "PENDING" | "APPROVED" | "REJECTED";

export default function StatusBadge({ status }: { status: Status }) {
  const styles = {
    PENDING:  "bg-yellow-100 text-yellow-800 border border-yellow-300",
    APPROVED: "bg-green-100  text-green-800  border border-green-300",
    REJECTED: "bg-red-100    text-red-800    border border-red-300",
  };
  const labels = { PENDING: "Pending", APPROVED: "Approved", REJECTED: "Rejected" };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}