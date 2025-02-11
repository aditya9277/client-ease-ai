import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CustomerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Customer data has been successfully submitted",
      duration: 3000,
    });
    setFormData({ name: "", email: "", address: "", phone: "" }); // Clear form
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="border border-white/10 bg-white/5 backdrop-blur-xl mt-6 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
          Customer Data Form
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            {Object.entries(formData).map(([key, value]) => (
              <input
                key={key}
                type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'}
                name={key}
                value={value}
                onChange={handleChange}
                placeholder={` ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-blue-100 placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            ))}
          </div>
          <Button 
            type="submit" 
            variant="outline" 
            className="w-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 border-white/10 text-blue-100"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CustomerForm;
