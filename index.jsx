<View style={styles.container}>
<ImageBackground
  source={require('./assets/images/wallpaper.jpg')}
  style={styles.background}
>
  <Image
    source={require('./assets/images/back.jpg')}
    style={styles.image}
  />
  <Text style={styles.text}>Plutão</Text>
  <Text style={styles.subtitle}>O menor planeta</Text>
  <View style={styles.line}></View>
  <Text style={styles.description}>
    Descoberto em 1930, pelo astrônomo estadunidense Clyde Tombaugh, Plutão está localizado na região denominada Cinturão de Kuiper, que abriga milhões de corpos celestes gelados, com distâncias do Sol que variam entre 4,5 bilhões a 7,5 bilhões de quilômetros. Essa distância para o Sol faz com que Plutão registre temperaturas baixíssimas, girando em torno de 200° Celsius negativos.
  </Text>
  <View style={styles.line}></View>
  <Text style={styles.galleryText}>Galeria</Text>
  <View style={styles.imageContainer}>
    <Image
      source={require('./assets/images/backimage1.jpg')}
      style={styles.galleryImage}
    />
    <Image
      source={require('./assets/images/backimage2.jpg')}
      style={styles.galleryImage}
    />
  </View>
</ImageBackground>
<StatusBar style="auto" />
</View>

