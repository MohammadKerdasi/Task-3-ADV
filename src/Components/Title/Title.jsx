import './Title.css'

const  title = ({subTitle , Title, className}) => {
  return (
    <div className={`Title ${className}`}>
        <p>{subTitle}</p>
        <h2>{Title}</h2>
    </div>
  )
}

export default title