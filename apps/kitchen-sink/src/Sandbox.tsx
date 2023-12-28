// debug-verbose
// import './wdyr'

import { getTokens, styled } from '@tamagui/core'
import { Trash2 } from '@tamagui/lucide-icons'
import { View } from 'react-native'

const StyledTrash = styled(Trash2, {
  acceptsClassName: true,
})

const tokens = getTokens()

export const Sandbox = () => {
  return (
    <View style={{ width: '100%', height: '100%', padding: 50 }}>
      <>
        {/* <Text color="unset">test me</Text> */}
        <Trash2 color={'$blue6Light'} size="$3" />
        <StyledTrash color={'$blue6Light'} size="$3" />
        <Trash2 color={tokens.color['$blue6Light']?.variable} size="$3" />
        {/* This is the example I have in my codebase */}
        <StyledTrash
          color={tokens.color['$blue6Light']?.variable}
          size="$3"
          $sm={{ width: 16, height: 16 }}
          $gtLg={{ width: 50, height: 50 }}
        />
      </>
    </View>
  )
}
