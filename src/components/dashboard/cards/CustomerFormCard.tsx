
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
    setFormData({ name: "", email: "", address: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="bg-[#1E293B]/90 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 mt-6">
      <CardHeader>
        <CardTitle className="text-gray-100">Customer Data Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Customer Name"
              className="w-full bg-[#0F172A]/60 border-cyan-500/20 text-gray-200 placeholder:text-gray-500 rounded-md px-3 py-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-[#0F172A]/60 border-cyan-500/20 text-gray-200 placeholder:text-gray-500 rounded-md px-3 py-2"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full bg-[#0F172A]/60 border-cyan-500/20 text-gray-200 placeholder:text-gray-500 rounded-md px-3 py-2"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-[#0F172A]/60 border-cyan-500/20 text-gray-200 placeholder:text-gray-500 rounded-md px-3 py-2"
            />
          </div>
          <Button type="submit" variant="outline" className="w-full border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/10">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CustomerForm;
