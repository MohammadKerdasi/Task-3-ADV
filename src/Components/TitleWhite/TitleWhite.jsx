import './TitleWhite.css'

const  titleWhite = ({subTitleWhite , TitleWhite}) => {
  return (
    <div className='TitleWhite'>
        <p>{subTitleWhite}</p>
        <h2> {TitleWhite}</h2>
    </div>
  )
}

export default titleWhite