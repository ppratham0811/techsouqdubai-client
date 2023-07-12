import React from "react";

const Menu = () => {
  return (
    // Navbar Menu
    <div class="hidden bg-white lg:block">
      <nav class="container mx-auto px-2 sm:px-8">
        <ul class="menu flex flex-wrap items-center justify-between py-[10px] text-lg">
          <li class="underlined-animated group relative">
            <a href="#" class="btn-open flex items-center gap-1 font-semibold">
              <span>Products</span>
              <i class="bi bi-caret-down-fill transition-all-300 flex rotate-0 text-xs text-primary-color group-hover:rotate-180"></i>
            </a>
            <div class="submenu transition-all-300 invisible absolute left-0 pt-[10px] opacity-0 group-hover:visible group-hover:opacity-100">
              <ul class="relative w-[250px] bg-white text-base shadow-custom-1">
                <li class="group-1">
                  <a href="#" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Pc components</span>
                    <i class="bi bi-caret-right-fill group-1-hover-visible invisible ml-auto flex text-xs text-primary-color"></i>
                  </a>
                  <div class="submenu group-1-hover-visible transition-all-300 invisible absolute top-0 left-full min-h-full min-w-[680px] opacity-0">
                    <div class="bg-white shadow-custom-2">
                      <div class="border-b-2 border-primary-color py-[10px]">
                        <span class="px-5 text-3xl font-bold uppercase text-primary-color">
                          Pc components
                        </span>
                      </div>
                      <div class="submenu-categories flex flex-wrap">
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/pc_components/motherboards.jpg"
                                alt="motherboard"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Motherboards
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/pc_components/processors.jpg"
                                alt="processors"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Processors
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/pc_components/rams.jpg"
                                alt="rams"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              RAMS
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/pc_components/video_cards.jpg"
                                alt="video cards"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Video Cards
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/pc_components/power_supplys.jpg"
                                alt="video cards"
                              />
                            </div>
                            <span class="group-2-hover-font block object-contain text-center">
                              Power Supplys
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/pc_components/hard_drives.jpg"
                                alt="video cards"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Hard Drives
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/pc_components/ssd_disk.jpg"
                                alt="video cards"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              SSD Disk
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/pc_components/computer_case.jpg"
                                alt="video cards"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Case
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="group-1">
                  <a href="#" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Peripherals</span>
                    <i class="bi bi-caret-right-fill group-1-hover-visible invisible ml-auto flex text-xs text-primary-color"></i>
                  </a>
                  <div class="submenu group-1-hover-visible transition-all-300 invisible absolute top-0 left-full min-h-full min-w-[680px] opacity-0">
                    <div class="bg-white shadow-custom-2">
                      <div class="border-b-2 border-primary-color py-[10px]">
                        <span class="px-5 text-3xl font-bold uppercase text-primary-color">
                          Peripherals
                        </span>
                      </div>
                      <div class="submenu-categories flex flex-wrap">
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/peripherals/keywords.jpg"
                                alt="motherboard"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Keywords
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/peripherals/mouse.jpg"
                                alt="processors"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Mouses
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/peripherals/mic.jpg"
                                alt="rams"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Mics
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/peripherals/webcam.jpg"
                                alt="rams"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Webcam
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="group-1">
                  <a href="#" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Computers</span>
                    <i class="bi bi-caret-right-fill group-1-hover-visible invisible ml-auto flex text-xs text-primary-color"></i>
                  </a>
                  <div class="submenu group-1-hover-visible transition-all-300 invisible absolute top-0 left-full min-h-full min-w-[680px] opacity-0">
                    <div class="bg-white shadow-custom-2">
                      <div class="border-b-2 border-primary-color py-[10px]">
                        <span class="px-5 text-3xl font-bold uppercase text-primary-color">
                          Computers
                        </span>
                      </div>
                      <div class="submenu-categories flex flex-wrap">
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/computers/desktops.jpg"
                                alt="motherboard"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Desktops
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/computers/notebooks.jpg"
                                alt="processors"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Notebooks
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="group-1">
                  <a href="#" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Monitors</span>
                  </a>
                </li>
                <li class="group-1">
                  <a href="#" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Printers</span>
                  </a>
                </li>
                <li class="group-1">
                  <a href="#" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Gaming</span>
                    <i class="bi bi-caret-right-fill group-1-hover-visible invisible ml-auto flex text-xs text-primary-color"></i>
                  </a>
                  <div class="submenu group-1-hover-visible transition-all-300 invisible absolute top-0 left-full min-h-full min-w-[680px] opacity-0">
                    <div class="bg-white shadow-custom-2">
                      <div class="border-b-2 border-primary-color py-[10px]">
                        <span class="px-5 text-3xl font-bold uppercase text-primary-color">
                          Gaming
                        </span>
                      </div>
                      <div class="submenu-categories flex flex-wrap">
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/gaming/consoles.jpg"
                                alt="motherboard"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Consoles
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/gaming/games.jpg"
                                alt="processors"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Games
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/gaming/accessories.jpg"
                                alt="processors"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Accessories
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="group-1">
                  <a href="#" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Tablets</span>
                  </a>
                </li>
                <li class="group-1">
                  <a href="#" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Smartphones</span>
                  </a>
                </li>
                <li class="group-1">
                  <a href="#" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Software</span>
                    <i class="bi bi-caret-right-fill group-1-hover-visible invisible ml-auto flex text-xs text-primary-color"></i>
                  </a>
                  <div class="submenu group-1-hover-visible transition-all-300 invisible absolute top-0 left-full min-h-full min-w-[680px] opacity-0">
                    <div class="bg-white shadow-custom-2">
                      <div class="border-b-2 border-primary-color py-[10px]">
                        <span class="px-5 text-3xl font-bold uppercase text-primary-color">
                          Software
                        </span>
                      </div>
                      <div class="submenu-categories flex flex-wrap">
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/software/os.jpg"
                                alt="motherboard"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Operating System
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/software/office.jpg"
                                alt="processors"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Office Package
                            </span>
                          </a>
                        </div>
                        <div class="group-2 p-[10px]">
                          <a class="categorie-container inline-block" href="#">
                            <div class="categorie-img h-[150px] w-[150px]">
                              <img
                                class="img-product group-2-hover-img"
                                src="images/categories/software/antivirus.jpg"
                                alt="processors"
                              />
                            </div>
                            <span class="group-2-hover-font block text-center">
                              Antivirus
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="underlined-animated">
            <a href="index.html">Home</a>
          </li>
          <li class="underlined-animated">
            <a href="#">Desktops</a>
          </li>
          <li class="underlined-animated">
            <a href="#">Notebooks</a>
          </li>
          <li class="underlined-animated">
            <a href="#">Smartphones</a>
          </li>
          <li class="underlined-animated group">
            <a href="#" class="flex items-center gap-1">
              <span>Shop</span>
              <i class="bi bi-caret-down-fill transition-all-300 flex rotate-0 text-xs text-primary-color group-hover:rotate-180"></i>
            </a>
            {/* <div class="transition-all-300 invisible absolute left-0 pt-[10px] opacity-0 group-hover:visible group-hover:opacity-100">
              <ul class="relative w-[250px] bg-white text-base shadow-custom-1">
                <li class="group-1">
                  <a href="shop-mixed.html" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Shop - Mixed</span>
                  </a>
                </li>
                <li class="group-1">
                  <a
                    href="shop-listed.html"
                    class="flex items-center gap-2 p-2"
                  >
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Shop - Listed</span>
                  </a>
                </li>
                <li class="group-1">
                  <a href="shop-grid.html" class="flex items-center gap-2 p-2">
                    <i class="bi bi-circle-fill group-1-hover-visible invisible flex text-[6px] text-primary-color"></i>
                    <span class="group-1-hover-font">Shop - Grid</span>
                  </a>
                </li>
              </ul>
            </div> */}
          </li>
          <li class="underlined-animated">
            <a href="faqs.html">FAQ's</a>
          </li>
          <li class="underlined-animated">
            <a href="contact-us.html">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
