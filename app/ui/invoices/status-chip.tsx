'use client';

import InvoiceStatus from '@/app/ui/invoices/status';
import StatusDropdown from '@/app/ui/invoices/status-dropdown';

export default function InvoiceStatusChip({
  id,
  status,
}: {
  id: string;
  status: string;
}) {
  let isDropdownOpen = false;
  return (
    <div onClick={() => (isDropdownOpen = !isDropdownOpen)}>
      <InvoiceStatus status={status} />
      {isDropdownOpen && <StatusDropdown id={id} />}
    </div>
  );
}
