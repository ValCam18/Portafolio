import { useState } from 'react';

export default function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setSubmitted(true);
  }

  return (
    <section id="contact" className="w-full py-4">
      <div className="container">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-m font-medium mb-1">Name</label>
              <input type="text" name="name" placeholder="Tu nombre" required className="block w-full h-10 rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#c73967] focus:border-[#c73967]" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-m font-medium mb-1">Email</label>
              <input type="email" name="email" placeholder="Your email" required className="block w-full h-10 rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#c73967] focus:border-[#c73967]" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-m font-medium mb-1">Subject</label>
            <input type="text" name="subject" placeholder="Subject of your message" required className="block w-full h-10 rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#c73967] focus:border-[#c73967]" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-m font-medium mb-1">Message</label>
            <textarea name="message" placeholder="Your message" required className="block w-full rounded-md border border-gray-400 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#c73967] focus:border-[#c73967] min-h-[150px]" />
          </div>
          <button type="submit" className="bg-[#ff7b00] text-white rounded px-4 py-2 w-full hover:scale-105 transition-transform ]">Send Message</button>
          {submitted && <p className="text-green-600 font-semibold transition-opacity">✅ Mensaje enviado correctamente</p>}
        </form>
      </div>
    </section>
  );
}
