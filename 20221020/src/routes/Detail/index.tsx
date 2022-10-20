import { useParams } from 'react-router-dom'
import { DATA } from 'constant'

const Detail = () => {
  const { id } = useParams()
  const targetItem = DATA.filter((item) => item.id === Number(id))[0]
  return (
    <div>
      <img src={targetItem.images} alt={targetItem.title} />
      <div>
        <div>{targetItem.title}</div>
        <div>{targetItem.description}</div>
        <div>{targetItem.price}</div>
        <div>{targetItem.createdAt}</div>
      </div>
    </div>
  )
}

export default Detail
