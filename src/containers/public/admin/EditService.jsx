import React from 'react'
import { memo } from 'react'
import styled from 'styled-components'
import { title } from '../../../ultis/path'

const EditService = () => {
  document.title = title.EDIT_CATEGORY
  return (
    <Styled></Styled>
  )
}

const Styled = styled.div`
    
`

export default memo(EditService)