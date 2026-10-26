import CountUp from "@/components/CountUp";

// Splits a display figure like "+21.1%", "2.5x" or "150+" into the parts CountUp animates.
export default function MetricValue({ value }: { value: string }) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return <>{value}</>;
  const [, prefix, number, suffix] = match;
  return (
    <CountUp
      value={Number(number)}
      decimals={number.split(".")[1]?.length ?? 0}
      prefix={prefix}
      suffix={suffix}
      persist={false}
    />
  );
}
