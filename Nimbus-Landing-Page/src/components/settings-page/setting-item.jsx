const SettingItem = ({
  icon: Icon,
  title,
  description,
  children,
  danger = false,
}) => (
  <div className="flex items-center justify-between p-4 border-b border-border last:border-b-0 hover:bg-accent/5 transition-colors">
    <div className="flex items-center gap-3">
      <Icon
        className={`h-5 w-5 ${danger ? "text-destructive" : "text-blue-500"}`}
      />
      <div>
        <h3
          className={`font-inter-medium ${
            danger ? "text-destructive" : "text-foreground"
          }`}
        >
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-inter-regular">
          {description}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-2">{children}</div>
  </div>
);

export default SettingItem;
