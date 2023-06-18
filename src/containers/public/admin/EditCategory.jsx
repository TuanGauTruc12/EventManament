import React from 'react'
import { memo } from 'react'
import styled from 'styled-components'
import { title } from '../../../ultis/path'

const EditCategory = () => {
  document.title = title.EDIT_CATEGORY_ADMIN;
  return (
    <Styled></Styled>
  )
}

const Styled = styled.div``
export default memo(EditCategory)