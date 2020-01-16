

export const TestComponentEdit = ({ className, attributes, setAttributes }) => {
  const { title, subtitle, content } = attributes
  const onChange = key => event => {
    if(event && event.target) {
      setAttributes({ [key]: event.target.value })
    }
  }

  return (
    <div className={className}>
      <input value={title} onChange={onChange("title")}/>
    </div>  
  )
}

export const TestCoponentSave = ({ className, attributes }) => {
  console.log(attributes)
  const { title, subtitle, content } = attributes
  return (
    <div className={className}>
    <div className="card">
      <div className="card-body">
          {
            title && <h5 className="card-title">
              {title}
            </h5>
          }
          {
            subtitle && <h6 className="card-subtitle mb-2 text-muted">
              {subtitle}
            </h6>
          }
    </div>
    </div>
    </div>  
  )
}