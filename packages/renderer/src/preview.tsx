import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'
import './preview.scss'
import 'github-markdown-css/github-markdown.css'

interface IProps {
  doc: string
}

const Preview: React.FC<IProps> = (props) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact, React as any)
    .processSync(props.doc).result
  return <div className="preview markdown-body">{md as any}</div>
}

export default Preview