export function MalzemeKayit() {
    return (
        <div>
            <table className="border-separate">
                <tbody>
                    <tr>
                        <td>Kodu</td>
                        <td><input type="text" className="w-xs" /></td>
                    </tr>
                    <tr>
                        <td>Açıklaması</td>
                        <td><input type="text" className="w-sm" /></td>
                    </tr>
                    <tr>
                        <td>Açıklama 2</td>
                        <td><input type="text" className="w-sm" /></td>
                    </tr>
                    <tr>
                        <td>Açıklama 3</td>
                        <td><input type="text" className="w-sm" /></td>
                    </tr>
                </tbody>
            </table>

            <div className="inline-flex flex-wrap justify-stretch text-lg my-4">
                <span className="bg-(--secondary-color) text-white rounded-ss-md rounded-se-md px-2 text-center">Genel Bilgiler</span>
                <span className="bg-(--primary-color) text-white rounded-ss-md rounded-se-md px-2 text-center">Genel Bilgiler 2</span>
                <span className="bg-(--primary-color) text-white rounded-ss-md rounded-se-md px-2 text-center">İzleme ve Sıralama</span>
                <span className="bg-(--primary-color) text-white rounded-ss-md rounded-se-md px-2 text-center">Birimler</span>
                <span className="bg-(--primary-color) text-white rounded-ss-md rounded-se-md px-2 text-center">Alternatifler</span>
                <span className="bg-(--primary-color) text-white rounded-ss-md rounded-se-md px-2 text-center">Malzeme Özellikleri</span>
                <span className="bg-(--primary-color) text-white rounded-ss-md rounded-se-md px-2 text-center">Muhasebe Hesapları</span>
                <span className="bg-(--primary-color) text-white rounded-ss-md rounded-se-md px-2 text-center flex-1">E-Mağaza</span>
                <span className="bg-(--primary-color) text-white rounded-ss-md rounded-se-md px-2 text-center flex-1">Satınalma/Satış Fiyatları</span>
                <span className="bg-(--primary-color) text-white rounded-ss-md rounded-se-md px-2 text-center flex-1">Market</span>
                <span className="bg-(--primary-color) text-white rounded-ss-md rounded-se-md px-2 text-center flex-1">Pazar Yeri Bilgileri</span>
            </div>

            <div className="text-md">
                <div className="font-medium">Birim Seti</div>

                <div className="flex gap-3">
                    <div>
                        <table className="rst-logo-table w-[9rem]">
                            <tbody>
                                <tr>
                                    <td className="w-[1.5rem]"></td>
                                    <td className="text-center">Birim</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>ADET</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="h-[1.5rem]"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="h-[1.5rem]"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="h-[1.5rem]"></td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="rst-logo-table w-[9rem] mt-2">
                            <tbody>
                                <tr>
                                    <td className="w-[1.5rem]">No.</td>
                                    <td className="text-center">Barkod</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td className="h-[1.5rem]"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="h-[1.5rem]"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="h-[1.5rem]"></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="h-[1.5rem]"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex-1">
                        <span>Ana Birim</span>
                        <div>
                            <span>Kodu</span>
                            <input type="text" />
                            <span>Açıklaması</span>
                            <input type="text" />
                        </div>
                        <div className="mt-2">Çevrim Katsayıları</div>
                        <div>
                            <input type="text" />
                            <span>ADET</span>
                            <span>=</span>
                            <input type="text" />
                            <span>Açıklaması</span>
                        </div>
                        <div className="mt-2">
                            <div className="grid grid-cols-6 gap-2">
                                <span>En</span>
                                <input type="text" />
                                <input type="text" />

                                <span>Net Hacim</span>
                                <input type="text" />
                                <input type="text" />

                                <span>Boy</span>
                                <input type="text" />
                                <input type="text" />

                                <span>Brüt Hacim</span>
                                <input type="text" />
                                <input type="text" />

                                <span>Yükseklik</span>
                                <input type="text" />
                                <input type="text" />

                                <span>Net Ağırlık</span>
                                <input type="text" />
                                <input type="text" />

                                <span>Alan</span>
                                <input type="text" />
                                <input type="text" />

                                <span>Brüt Ağırlık</span>
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-1">
                <button className="bg-(--primary-color) text-white px-5 py-[1px] rounded-sm cursor-pointer">Kaydet</button>
                <button className="bg-(--primary-color) text-white px-5 py-[1px] rounded-sm cursor-pointer">Vazgeç</button>
            </div>
        </div>
    );
}
