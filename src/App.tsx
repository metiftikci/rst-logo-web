import './App.css';
import { MalzemeKayit } from './components/MalzemeKayit';
import { Table } from './components/Table';
import { Window } from './components/Window';
import {
    IconBellFilled,
    IconChevronDown,
    IconChevronRight,
    IconDeviceDesktop,
    IconFile,
    IconHomeFilled,
    IconMenu2,
    IconSearch,
    IconSquarePlus,
    IconUserCircle,
    IconX
} from '@tabler/icons-react';

function App() {
  return (
    <div className="size-full flex flex-col">
      <div className="bg-white text-black flex items-center text-xl">
        <img src="logo.png" alt="Logo" />
        <div className="flex-1 flex gap-12 pl-[3rem] font-medium">
            <span><u>D</u>osya</span>
            <span>Dü<u>z</u>en</span>
            <span><u>İ</u>zle</span>
            <span><u>A</u>raçlar</span>
            <span><u>C</u>alışma Alanı</span>
            <span><u>Y</u>ardım</span>
        </div>
        <div className="self-stretch inline-flex">
            <div className="bg-[#4a4093] p-2">
                <IconBellFilled color="white" />
            </div>
            <div className="p-2">
                <IconUserCircle color="gray" size={30} />
            </div>
            <div className="flex flex-col w-3xs">
                <span className="font-bold">LOGO</span>
                <span className="text-xs text-red-500">11-MET 2025</span>
                <span className="text-xs">2-01.01.2025...31.12.2025</span>
            </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
        <div className="py-3 px-3 flex flex-col items-center text-white" style={{ backgroundColor: 'var(--transparent-bg-color)' }}>
          <IconDeviceDesktop />
          <div>Yeni Masa Üstü</div>
        </div>

        <div className="p-2 flex flex-1 text-white text-xl">
          <div className="rounded-lg p-3 w-md flex flex-col gap-2" style={{ backgroundColor: 'var(--transparent-bg-color)' }}>
            <div className="flex items-center gap-2">
                <IconMenu2 />
                <span className="flex-1">Menü</span>
                <IconX />
            </div>

            <div className="bg-white flex items-center gap-2 p-2">
                <IconSearch color="gray" size={16} />
                <input type="text" className="flex-1 text-black placeholder-gray-500" style={{ border: 0 }} placeholder="Arama Yapın" />
            </div>

            <div>
              <div className="flex items-center"><IconChevronRight size={22} /> Hızlı Veri Girişi</div>
              <div className="flex items-center"><IconChevronRight size={22} /> Ana Kayıtlar</div>
              <div className="flex items-center"><IconChevronRight size={22} /> Stok</div>
              <div>
                <div className="flex items-center">
                  <IconChevronDown size={22} />
                  <span className="font-bold border px-1 border-blue-500 bg-[rgba(0,115,255,0.3)]">Fatura</span>
                </div>
                <div className="pl-4">
                    <div className="flex items-center">
                      <IconChevronDown size={22} />
                      <span className="font-bold">Hareketler</span>
                    </div>
                    <div className="pl-6">
                        <div className="flex items-center">
                          <span>Satınalma Faturaları</span>
                        </div>
                        <div className="flex items-center">
                          <span>Satış Faturaları</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex items-center"><IconChevronRight size={22} /> Cari Hesap</div>
              <div className="flex items-center"><IconChevronRight size={22} /> Kasa</div>
              <div className="flex items-center"><IconChevronRight size={22} /> Banka</div>
              <div className="flex items-center"><IconChevronRight size={22} /> Çek ve Senet</div>
              <div className="flex items-center"><IconChevronRight size={22} /> Muhasebe</div>
              <div className="flex items-center"><IconChevronRight size={22} /> Talep Yönetimi</div>
              <div className="flex items-center"><IconChevronRight size={22} /> Sabit Kıymet</div>
              <div className="flex items-center"><IconChevronRight size={22} /> Teminat</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-center pb-[3rem] px-10" style={{ backgroundColor: 'var(--transparent-bg-color)', width: '4rem',  }}>
            <div className="inline-flex flex-col items-center">
                <IconSquarePlus color="#ffb782" size={30} />
                <span className="text-center text-white">Widget Ekle</span>
            </div>
        </div>
      </div>

      <div className="h-12 p-1 bg-white text-black text-sm flex gap-2">
        <div className="inline-flex flex-col items-center">
          <IconHomeFilled color="gray" size={18} />
          <div>Masaüstü</div>
        </div>

        <div className="inline-flex gap-2 items-center p-1 border-1 border-stone-300 bg-[#f0f0f0]">
          <span><IconFile size={16} /></span>
          <span>(06) Satınalma İade</span>
          <span className="self-start"><IconX size={8} /></span>
        </div>
      </div>

      <Window title="Malzemeler" x={400} y={100}><Table /></Window>
      <Window title="Yeni Malzeme" x={700} y={200}><MalzemeKayit /></Window>
    </div>
  );
}

export default App;
