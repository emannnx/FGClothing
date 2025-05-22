
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  const generateMailtoLink = () => {
    // Basic validation
    if (!name || !email || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return '#';
    }
    
    const mailSubject = subject || `Message from ${name} via FG-Clothings Site`;
    const mailBody = `Hi Iman,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
    
    return `mailto:fasinugbenga67@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation handled in generateMailtoLink
    window.location.href = generateMailtoLink();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Your Name"
          required
          className="bg-secondary border-gray-700 focus:border-gold focus:ring-gold"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input 
          id="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Your Email"
          required
          className="bg-secondary border-gray-700 focus:border-gold focus:ring-gold"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input 
          id="subject" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
          placeholder="Message Subject"
          className="bg-secondary border-gray-700 focus:border-gold focus:ring-gold"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea 
          id="message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Your Message"
          required
          className="min-h-[150px] bg-secondary border-gray-700 focus:border-gold focus:ring-gold"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gold text-black hover:bg-gold/90 transition-colors"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
