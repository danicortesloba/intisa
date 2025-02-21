import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Form = () => {
  const initialForm = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  }
  const [form, setForm] = useState({initialForm})

  const manageChange = (e) => {
    const {name, value} = e.target
    setForm({ ...form, [name]: value })
}

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_SERVICE_ID,
        import.meta.env.VITE_FORM_ID,
        e.target,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      )
      emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_SERVICE_ID,
        import.meta.env.VITE_AUTOREPLY_ID,
        e.target,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY
      )
      setForm(initialForm)
      alert("Mensaje enviado con exito")
      window.location.reload(false)
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
            onChange={manageChange}
              name= "name"
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
              onChange={manageChange}
              name="lastname"
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
              onChange={manageChange}
              name="email"
              type="email"
              className="form-control"
              placeholder="Tu email"
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Teléfono</label>
            <input
              onChange={manageChange}
              name="phone"
              type="input"
              className="form-control"
              placeholder="Tu teléfono"
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
              onChange={manageChange}
              name="message"
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
