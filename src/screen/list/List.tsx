import { Text, View } from "react-native"

export const List = () => {
  const { isLoading, articles } = useListNews()
  return (
    <Text>
      Tela List....
      em breve atualizações. Aguarde
    </Text>

  )

}