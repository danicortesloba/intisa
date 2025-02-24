

const ContactMeta = () => {
  const contactInfoList = [
    {
      title: "Teléfono",
      phone: "+56978621643",
      phoneLink: "tel:+56978621643", // Changed phoneLink to tel: URI
    },
    {
      title: "Correo",
      mail: "info@intisa.cl",
      mailLink: "mailto:info@intisa.cl", // Changed mailLink to direct email address
    },
  ];

  return (
    <div className="row mb-4 mb-lg-5" align="center">
      {contactInfoList.map((contact, index) => (
        <div  key={index}>
          <div className="contact-info">
            <p className="info-title">{contact.title}</p>
            {contact.phone && (
              <h6 className="info-phone">
                <a href={contact.phoneLink}>{contact.phone}</a>
              </h6>
            )}
            {contact.mail && (
              <h6 className="info-mail">
                <a href={contact.mailLink}>{contact.mail}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMeta;
