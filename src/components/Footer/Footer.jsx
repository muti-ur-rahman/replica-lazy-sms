import React from "react";

function Footer() {
  return (
    <>
      <footer class="mb-0 bg-[#EBE9FE] text-black py-4 h-[215px]">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 Muti-ur -rahman. All rights reserved.</p>

          <div class="flex justify-center space-x-4">
            <a href="#privacy" class="hover:underline">
              Privacy Policy
            </a>
            <a href="#terms" class="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
