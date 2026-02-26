"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@/shared/schema";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const contactSchema = insertMessageSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number is too short").optional(),
  content: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: InsertMessage) => {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to send message");
      }
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
        className: "bg-green-900 border-green-800 text-white",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      content: "",
    },
  });

  function onSubmit(data: InsertMessage) {
    mutate(data);
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Contact Us" 
          subtitle="Get In Touch"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="font-display font-bold text-2xl text-white mb-6 uppercase">Shop Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-white uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-zinc-400" data-testid="text-address">200 E North Ave.<br />Tonkawa, OK 74653</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-white uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-zinc-400" data-testid="text-phone">(580) 576-0534</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-white uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-zinc-400" data-testid="text-email">337LEE2023@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-white uppercase tracking-wider mb-1">Hours</h4>
                    <p className="text-zinc-400" data-testid="text-hours">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 bg-zinc-800 rounded-xl overflow-hidden border border-white/5 relative group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop" 
                alt="Map location"
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="secondary" className="shadow-xl" data-testid="button-open-maps">Open in Maps</Button>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            
            <h3 className="font-display font-bold text-2xl text-white mb-2 uppercase">Send a Message</h3>
            <p className="text-zinc-400 mb-8">Tell us about your project or repair needs.</p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-black/50 border-zinc-700 focus:border-primary text-white h-12" data-testid="input-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-300">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-black/50 border-zinc-700 focus:border-primary text-white h-12" data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-zinc-300">Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} className="bg-black/50 border-zinc-700 focus:border-primary text-white h-12" data-testid="input-phone" value={field.value ?? ""}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="I need help with my 2018 Harley Street Glide..." 
                          className="min-h-[150px] bg-black/50 border-zinc-700 focus:border-primary text-white resize-none"
                          {...field} 
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full h-14 bg-primary text-black font-bold text-lg uppercase tracking-wider hover:bg-orange-500 transition-all clip-path-button mt-4"
                  data-testid="button-submit-message"
                >
                  {isPending ? "Sending..." : (
                    <span className="flex items-center gap-2">Send Message <Send className="w-5 h-5" /></span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
