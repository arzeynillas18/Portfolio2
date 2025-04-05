
import { Mail, Linkedin, Github } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary rounded"></div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      linkedin.com/in/johndoe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a 
                      href="https://github.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      github.com/johndoe
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Current Status</h3>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full absolute top-0 left-0 animate-ping opacity-75"></div>
                </div>
                <p>Available for freelance work</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-4">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
