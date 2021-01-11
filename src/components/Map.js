import treeImage from '../assets/images/tree.png'

const Map = ({ setLightboxContent }) => {

  const data = [
    {
      tree: 'beuk',
      color: 'groen',
      name: 'Han Oomen',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales cursus volutpat. Curabitur aliquam nulla sit amet tempor dapibus. Duis non molestie enim, eget dapibus tellus. Aenean maximus ligula vitae mauris semper cursus. Donec a nisl ut orci pellentesque mattis non vitae tortor. Fusce sit amet dolor vestibulum, rhoncus erat et, tincidunt elit. Quisque rhoncus erat eu orci tincidunt condimentum. Morbi vestibulum mi eget hendrerit aliquet. Nulla a scelerisque ante. Duis gravida sit amet diam a tincidunt.',
      image: treeImage
    },
    {
      tree: 'eik',
      color: 'groen',
      name: 'Geert van Pelt'
    },
    {
      tree: 'palm',
      color: 'groen',
      name: 'Marco Lichtenberg'
    },
    {
      tree: 'berk',
      color: 'groen',
      name: 'Marian van Ast'
    },
    {
      tree: 'beuk',
      color: 'groen',
      name: 'Popko Cuperus'
    },
    {
      tree: 'eik',
      color: 'groen',
      name: 'marieke van ooijen'
    },
    {
      tree: 'palm',
      color: 'groen',
      name: 'Lotte'
    },
    {
      tree: 'berk',
      color: 'groen',
      name: 'Katrien van’t Hooft'
    },
    {
      tree: 'den',
      color: 'groen',
      name: 'Gönül Hettema-Fidan'
    }
  ]

  return (
    <div className='map'>
        <svg className='map' width='100%' height='100%'>
          {data.map((tree, index) => (<image href={treeImage} height='100' width='100' y={index >= 5 ? 200 : 50} x={index >= 5 ? 150*index - 750 : 150*index} key={index} onClick={() => setLightboxContent(tree)}/>))}
        </svg>
    </div>
  )
}

export default Map