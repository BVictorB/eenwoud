import treeImage from '../assets/images/tree.png'

const Map = ({ setLightboxContent }) => {

  const data = [
    {
      tree: 'beuk',
      color: 'groen',
      name: 'Han Oomen'
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

  const treeInfo = (tree) => {
    setLightboxContent(tree)
  }

  return (
    <svg className='map' width='100%' height='100%'>
      {data.map((tree, index) => (<image href={treeImage} height='100' width='100' y={index >= 5 ? 200 : 50} x={index >= 5 ? 150*index - 750 : 150*index} key={index} onClick={() => treeInfo(tree)}/>))}
    </svg>
  )
}

export default Map