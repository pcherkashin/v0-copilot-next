import React from 'react'
import parse from 'html-react-parser'

const PreviewScreen = ({ html_code }: { html_code: string }) => {
  return (
    <div className='w-full h-full bg-white rounded-lg shadow-lg p-2 border'>
      {parse(html_code)}
    </div>
  )
}

export default PreviewScreen
