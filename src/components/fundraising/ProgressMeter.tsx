import { motion } from "framer-motion";
import { formatCurrency, getFundraisingPercentage } from "../../utils/format";

interface ProgressMeterProps {
  raised: number;
  goal: number;
  currency: string;
}

export function ProgressMeter({ raised, goal, currency }: ProgressMeterProps) {
  const percentage = getFundraisingPercentage(raised, goal);

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(25,33,31,0.13)] sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-bloom-leaf">Raised</p>
          <p className="mt-2 font-display text-4xl font-black text-bloom-ink">
            {formatCurrency(raised, currency)}
          </p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-sm font-black uppercase tracking-wide text-bloom-ink/45">Goal</p>
          <p className="mt-2 text-xl font-black text-bloom-ink">{formatCurrency(goal, currency)}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 flex justify-between text-sm font-black uppercase tracking-wide text-bloom-ink/58">
          <span>Completion</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-4 overflow-hidden rounded-full bg-bloom-mint">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-bloom-leaf via-bloom-gold to-bloom-amber"
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
