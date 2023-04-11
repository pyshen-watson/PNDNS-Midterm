import './CVCard.scss'

export default function CvCard(props) {

    const { title, subtitle, info, time } = props.cv

    return (
        <div className='cv-card'>
            <p className='time-stamp'>{time}</p>
            <div className="data">
                <h2 className='title'>{title}</h2>
                <p className='subtitle'>{subtitle}</p>
                <p className='info'>{info}</p>
            </div>
        </div>
    )
}
