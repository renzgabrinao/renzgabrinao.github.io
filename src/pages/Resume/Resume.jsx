import resume from '../../assets/resume/RenzGabrinao-Resume.pdf'

function Resume() {
  return (
    <div style={{height: '100vh'}}>
      <embed src={resume} type="application/pdf" width="100%" height="100%" />
    </div>
  )

}

export default Resume