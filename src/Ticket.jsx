import TicketNum from "./TicketNum"; // सही पाथ चेक करें
import "./Ticket.css";

export default function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}
