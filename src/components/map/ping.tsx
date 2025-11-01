import { cn } from "@/lib/utils";

type PingProps = React.ComponentProps<"span"> & {
  size?: number
};

export function Ping({ size = 4, ...props }: PingProps) {
  return (
    <span
      {...props}
      className={
        cn(`flex size-${size}`,
          props.className
        )
      }
    >
      <span
        className="absolute inline-flex h-full w-full animate-ping scale-150 rounded-full bg-primary opacity-75"
        style={{
          animation: "ping 1.3s ease-in-out infinite"
        }}
      ></span>
      <span className={`relative inline-flex size-${size} rounded-full bg-primary shadow-lg shadow-primary-foreground/90 inset-ring-1 inset-ring-primary-foreground/20`}></span>
    </span>
  )
}
