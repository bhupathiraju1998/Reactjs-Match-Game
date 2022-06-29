import './index.css'

const ProjectItem = props => {
  const {imageDetails, clickMatchImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickImage = () => {
    clickMatchImage(id)
  }

  return (
    <li className="project-item-container">
      <button
        type="button"
        onClick={onClickImage}
        className="project-item-button"
      >
        <img src={thumbnailUrl} className="image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ProjectItem
