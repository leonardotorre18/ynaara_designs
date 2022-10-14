import '../../styles/BurgerButton.scss'

export default function BurgerButton({onClick, clicked}) {
  return (
    <div className='burger'
    onClick={onClick}
    >
      <span className="burger__content"></span>
      <span className="burger__content"></span>
      <span className="burger__content"></span>
    </div>
  )
}
