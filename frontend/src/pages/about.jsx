import CVData from '../components/CVData'
import CVCard from '../components/CVCard'

export default function CV() {

  const { education, career } = CVData

  return (
    <div>
        <div className='flex justify-center my-4'>
          <h1 className='text-4xl block'>Education</h1>
        </div>

        <div>
          {education.map(edu => <CVCard cv={edu} />)}
        </div>

        <div className='flex justify-center my-4'>
          <h1 className='text-4xl block'>Career</h1>
        </div>
        
        <div>
          {career.map(job => <CVCard cv={job} />)}
        </div>
    </div>
  )
}
