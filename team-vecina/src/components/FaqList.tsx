import { Plus } from "lucide-react";
import type { FaqItem } from "@/content/treatment";

type FaqListProps = {
  items: FaqItem[];
  dark?: boolean;
};

export default function FaqList({ items, dark = true }: FaqListProps) {
  return (
    <div className={`sv-faq ${dark ? "is-dark" : "is-light"}`}>
      {items.map((item) => (
        <details key={item.question} className="sv-faq-item">
          <summary>
            <span>{item.question}</span>
            <Plus size={18} aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
