interface ScrollableContentConfig {
    children?: string;
}

export default function ScrollableContent(config: ScrollableContentConfig) {
  return (
    <div style={{overflow: "auto", maxHeight: "200px"}}>
      {config.children}
    </div>
  )
}