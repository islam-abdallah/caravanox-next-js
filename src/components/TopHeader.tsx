import React from "react";
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Locale } from "@/i18n.config";

interface TopHeaderProps {
  locale: Locale;
  contact?: {
    email?: string;
  };
}

const TopHeader: React.FC<TopHeaderProps> = ({ locale }) => {
  const isRTL = locale === "ar";

  return (
    <div className="bg-gray-900 text-white py-2 fixed z-50 top-0 left-0 right-0 ">
      <div className=" container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Email */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Mail size={16} />
            <a
              href={`mailto:${"sales@caravanox.com"}`}
              className="text-sm hover:text-primary transition-colors">
              {"sales@caravanox.com"}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href="https://www.facebook.com/Caravanox"
              className="hover:text-accent transition-colors"
              aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
              aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/%D9%83%D8%B1%D9%81%D8%A7%D9%86-%D8%A7%D9%88%D9%83%D8%B3-caravanox-a97b11222/"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
