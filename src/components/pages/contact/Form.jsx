

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget
    console.log(form)

  }
  return (
    <form className="form-style1" onSubmit= {(e)=> handleSubmit (e)}>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu nombre"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
             Apellido
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu apellido"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Tu email"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              Comentario
            </label>
            <textarea
              cols={30}
              rows={4}
              placeholder="¿Cuál es tu pregunta?"
              defaultValue={""}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm">
              Enviar
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
