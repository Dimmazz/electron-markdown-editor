import { useEffect, useState, useRef } from 'react'
import { basicSetup, EditorView } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { keymap, highlightActiveLine } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { historyKeymap } from '@codemirror/history'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { indentOnInput } from '@codemirror/language'
// import { defaultHighlightStyle, HighlightStyle, tags } from '@codemirror/highlight'
import { oneDark } from '@codemirror/theme-one-dark'

export const transparentTheme = EditorView.theme({
  '&': {
    backgroundColor: 'transparent !important',
    height: '100%'
  }
})

// const syntaxHighlighting = HighlightStyle.define([
//   {
//     tag: tags.heading1,
//     fontSize: '1.6em',
//     fontWeight: 'bold'
//   },
//   {
//     tag: tags.heading2,
//     fontSize: '1.4em',
//     fontWeight: 'bold'
//   },
//   {
//     tag: tags.heading3,
//     fontSize: '1.2em',
//     fontWeight: 'bold'
//   }
// ])

import type React from 'react'

interface IProps {
  initialDoc: string
  onChange?: (state: EditorState) => void
}

interface keyBinding {
  key?: string
  mac?: string
  win?: string
  linux?: string
  run: Command
  shift?: Command
  scope?: string
  preventDefault?: boolean
}

type Command = (target: EditorView) => boolean

const useCodeMirror = <T extends Element>(
  props: IProps
): [React.MutableRefObject<T | null>, EditorView?] => {
  const refContaier = useRef(null)
  const [editorView, setEditorView] = useState<EditorView>()
  const { onChange } = props

  useEffect(() => {
    if (!refContaier.current) return

    const keymapState = [...defaultKeymap, ...historyKeymap] as keyBinding[]

    const startState = EditorState.create({
      doc: props.initialDoc,
      extensions: [
        basicSetup,
        keymap.of(keymapState),
        oneDark,
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true
        }),
        indentOnInput(),
        highlightActiveLine(),
        transparentTheme,
        EditorView.lineWrapping,
        EditorView.updateListener.of(update => {
          if (update.changes) {
            onChange && onChange(update.state)
          }
          /// highlightActiveLineGutter(),
          /// history(),
          /// lineNumbers(),
          /// bracketMatching(),
          /// defaultHighlightStyle.fallback,
          /// syntaxHighlighting.fallback,
        })
      ]
    })

    const view = new EditorView({
      state: startState,
      parent: refContaier.current
    })
    setEditorView(view)
  }, [refContaier])

  return [refContaier, editorView]
}

export default useCodeMirror
