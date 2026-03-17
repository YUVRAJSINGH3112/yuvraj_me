type FooterProps = {
  className?: string
}
export default function Footer({ className }: FooterProps) {
  return (
    <div className={`mt-6 ${className}`}>
      <p className="text-muted-foreground text-sm text-center">
        Designed and Developed by Yuvraj Singh
      </p>
      <p className="text-muted-foreground text-sm text-center">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  )
}