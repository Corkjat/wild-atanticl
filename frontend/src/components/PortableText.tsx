interface Block {
  _key: string
  _type: string
  style?: string
  children?: {
    _key: string
    _type: string
    text: string
    marks?: string[]
  }[]
}

interface PortableTextProps {
  blocks: Block[]
}

export default function PortableText({ blocks }: PortableTextProps) {
  if (!blocks || !Array.isArray(blocks)) return null

  return (
    <>
      {blocks.map((block) => {
        if (block._type !== 'block') return null

        const children = block.children?.map((child) => {
          let text: React.ReactNode = child.text
          if (child.marks?.includes('strong')) text = <strong key={child._key}>{text}</strong>
          if (child.marks?.includes('em')) text = <em key={child._key}>{text}</em>
          return text
        })

        switch (block.style) {
          case 'h1':
            return <h1 key={block._key}>{children}</h1>
          case 'h2':
            return <h2 key={block._key}>{children}</h2>
          case 'h3':
            return <h3 key={block._key}>{children}</h3>
          case 'h4':
            return <h4 key={block._key}>{children}</h4>
          default:
            return <p key={block._key}>{children}</p>
        }
      })}
    </>
  )
}
