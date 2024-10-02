import InvoiceStatus from '@/app/ui/invoices/status';
import { setInvoiceStatus } from '@/app/lib/actions';

export default function StatusDropdown({ id }: { id: string }) {
  const options = ['paid', 'pending', 'canceled', 'overdue'];

  const handleOptionClick = async (status: string) => {
    await setInvoiceStatus(id, status);
  };

  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionClick(option)}
            className="dropdown-item"
          >
            <InvoiceStatus status={option} />
          </li>
        ))}
      </ul>
    </div>
  );
}
