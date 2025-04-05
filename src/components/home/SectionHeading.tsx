
interface SectionHeadingProps {
  title: string;
  description?: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 mb-10">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <div className="w-24 h-1 bg-primary rounded"></div>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}
