import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScholarData, DiscoveredScholarState, FinalCuratorSubmission } from '../types';
import { SCHOLARS_DATA } from '../data/scholarsData';

interface FinalCuratorMissionProps {
  scholarsState: Record<string, DiscoveredScholarState>;
  onCompleteMission: (submission: FinalCuratorSubmission) => void;
  onClose: () => void;
}

export const FinalCuratorMission: React.FC<FinalCuratorMissionProps> = ({
  onCompleteMission,
  onClose
}) => {
  const [step, setStep] = useState<'select3' | 'reasons' | 'thesis'>('select3');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [reasons, setReasons] = useState<Record<string, string>>({});
  const [thesisStatement, setThesisStatement] = useState<string>('');

  // Default suggested justifications tailored to historical contribution
  const scholarReasonsMap: Record<string, string[]> = {
    'ahmed-yesevi': [
      'Yesevi geleneğinin ve Alperen dervişlerinin Anadolu’nun Türkleşmesi ve İslamlaşmasındaki kurucu manevi öncülüğü',
      'Türkçeyi hikmetlerle harmanlayarak İslam ahlakını Türkmen boylarına kendi dilleriyle sevdirmesi',
      'Dervişlerinin Anadolu’da kurduğu tekkelerle sosyal dayanışmayı ve vatanlaşmayı başlatması'
    ],
    'kasgarli-mahmud': [
      'Türk dilini ve kültür hafızasını kayıt altına alarak Anadolu’daki Türkmenlerin ortak milli kimliğini koruması',
      'Dîvânu Lugâti’t-Türk ile Türkçenin medeniyet dili olarak Anadolu’da kök salmasına zemin oluşturması',
      'Türk boylarının coğrafyasını ve geleneklerini belgeleyerek kültürel kopuşu engellemesi'
    ],
    'omer-hayyam': [
      'Büyük Selçuklu rasathane ve bilim mirasını zirveye taşıyarak Anadolu medreselerine ilham vermesi',
      'Matematik ve astronomi alanındaki evrensel buluşlarıyla Türk-İslam medeniyetinin rasyonel gücünü temsil etmesi',
      'Celali Takvimi ve cebir çalışmalarıyla Doğu-Batı bilim dünyasını aydınlatması'
    ],
    'cezeri': [
      'Anadolu topraklarında (Diyarbakır Artuklu sahası) sibernetik ve mekanik mühendisliğin temellerini atması',
      'Anadolu’nun sadece askerî değil, yüksek teknoloji ve bayındırlık merkezi olduğunu ispatlaması',
      'Krank mili ve otomasyon sistemleriyle su gücünü medeniyetin hizmetine sunması'
    ],
    'ibnularabi': [
      'Konya ve Malatya’da Selçuklu ulemasını etkileyerek Anadolu irfanının yüksek metafizik temelini kurması',
      'Vahdet-i Vücud düşüncesiyle evrensel sevgi ve marifet anlayışını Anadolu’ya taşıması',
      'Sadreddin Konevi aracılığıyla Osmanlı düşünce dünyasının omurgasını hazırlaması'
    ],
    'mevlana': [
      'Mesnevi ve diğer eserleriyle Anadolu’da sevgi, kardeşlik ve hoşgörünün evrensel dilini kurması',
      'Moğol istilası altındaki Anadolu halkına manevi direnç ve birlik ruhu aşılaması',
      'İnsanı merkeze alan ahlaki ilkeleriyle dünya kültür mirasına silinmez bir iz bırakması'
    ],
    'haci-bektas': [
      'Suluca Karahöyük’te kurduğu ocakla Anadolu ve Balkanlardaki Türkmen boylarının birliğini ve kaynaşmasını sağlaması',
      '"Bir olalım, iri olalım, diri olalım" diyerek toplumsal barışı ve ahlaki erdemleri yaygınlaştırması',
      'Ahilik teşkilatıyla el ele vererek Anadolu’nun iktisadi ve manevi imarını yönetmesi'
    ],
    'yunus-emre': [
      'Türkçeyi en arı, en samimi ve en derin şiir dili haline getirerek Anadolu’da kökleştirmesi',
      '"Sevelim, sevilelim" felsefesiyle halk arasında sevgi, hoşgörü ve merhameti hâkim kılması',
      'Risaletü’n-Nushiyye ile ahlaki nefis terbiyesini herkesin anlayabileceği sadelikte anlatması'
    ],
    'ibni-bibi': [
      'el-Evâmirü’l-Alâiyye ile Türkiye Selçuklularının yönetimini, imarını ve sosyal adaletini birinci elden kaydetmesi',
      'Anadolu Selçuklu tarihini, toprak düzenini (ikta) ve kurumsal yapısını aydınlatan en temel kaynak olması',
      'Devlet idaresinde tüccarların ve halkın güvenliğini sağlayan Selçuklu adalet anlayışını belgelemesi'
    ]
  };

  const handleToggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
      const nextReasons = { ...reasons };
      delete nextReasons[id];
      setReasons(nextReasons);
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
        // auto pre-select first recommended justification
        const defaultReason = scholarReasonsMap[id]?.[0] || '';
        setReasons((prev) => ({ ...prev, [id]: defaultReason }));
      }
    }
  };

  const handleSetReason = (scholarId: string, reasonText: string) => {
    setReasons((prev) => ({ ...prev, [scholarId]: reasonText }));
  };

  const isAllReasonsSelected = selectedIds.length === 3 && selectedIds.every((id) => Boolean(reasons[id]));

  const handleSubmit = () => {
    if (thesisStatement.trim().length < 8) return;
    onCompleteMission({
      selectedScholarIds: selectedIds,
      reasons,
      thesisStatement: thesisStatement.trim(),
      completedAt: new Date().toISOString()
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0f2933]/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-3xl bg-white border-2 border-[#0d9488] rounded-3xl shadow-[0_25px_70px_rgba(13,148,136,0.25)] overflow-hidden text-[#0f2933] flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0284c7] border-b border-[#0d9488]/30 flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div>
              <span className="text-[10px] font-serif uppercase tracking-widest text-[#ccfbf1] font-bold">
                Tüm İlim İnsanları İncelendi • Kapanış Görevi
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white">
                Şimdi Sıra Sizde: Büyük Değerlendirme
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-xs text-white/90 hover:text-white font-serif px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 transition-colors"
          >
            Geri Dönünüz
          </button>
        </div>

        {/* Step Indicator */}
        <div className="grid grid-cols-3 border-b border-[#0d9488]/20 bg-[#f0fdfa] text-center text-xs font-serif">
          <div
            className={`py-2.5 px-2 border-b-2 transition-colors ${
              step === 'select3'
                ? 'border-[#0d9488] text-[#0f766e] bg-white font-bold'
                : 'border-transparent text-slate-500'
            }`}
          >
            1. 3 Öncü Âlimi Seçiniz ({selectedIds.length}/3)
          </div>
          <div
            className={`py-2.5 px-2 border-b-2 transition-colors ${
              step === 'reasons'
                ? 'border-[#0d9488] text-[#0f766e] bg-white font-bold'
                : 'border-transparent text-slate-500'
            }`}
          >
            2. Gerekçelerinizi Belirleyiniz
          </div>
          <div
            className={`py-2.5 px-2 border-b-2 transition-colors ${
              step === 'thesis'
                ? 'border-[#0d9488] text-[#0f766e] bg-white font-bold'
                : 'border-transparent text-slate-500'
            }`}
          >
            3. Sentezinizi Yazınız
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#fafdfd]">
          {/* STEP 1: SELECT 3 SCHOLARS */}
          {step === 'select3' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#f0fdfa] border border-[#0d9488]/30 rounded-2xl">
                <h3 className="font-serif font-bold text-sm text-[#0f766e]">
                  Anadolu’nun Türkleşmesi ve İslamlaşması Açısından En Etkili Olduğunu Değerlendirdiğiniz 3 İsmi Seçiniz:
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  İncelediğiniz 9 büyük âlim arasından, Anadolu'nun vatanlaşma ve medeniyetleşme sürecinde en kritik etkiyi bıraktığını değerlendirdiğiniz üç portreyi işaretleyiniz.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SCHOLARS_DATA.map((scholar) => {
                  const isSelected = selectedIds.includes(scholar.id);
                  return (
                    <div
                      key={scholar.id}
                      onClick={() => handleToggleSelect(scholar.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#e0f2f1] border-2 border-[#0d9488] ring-2 ring-[#0d9488]/30 shadow-md text-[#0f766e]'
                          : selectedIds.length >= 3
                          ? 'bg-slate-50 border-slate-200 opacity-40 cursor-not-allowed'
                          : 'bg-white border-2 border-[#0d9488]/20 hover:border-[#0d9488] hover:bg-[#f0fdfa] shadow-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] font-serif uppercase tracking-widest text-[#0d9488] font-bold">
                          Portre #{scholar.number}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                            isSelected
                              ? 'bg-[#0d9488] border-[#0d9488] text-white font-bold'
                              : 'border-slate-300 text-transparent'
                          }`}
                        >
                          ✓
                        </div>
                      </div>

                      <div className="my-2.5 flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#0d9488]/40 shrink-0 bg-[#e6f4f6] shadow-xs">
                          <img
                            src={`${import.meta.env.BASE_URL}images/scholars/avatars/${scholar.id}.png`}
                            alt={scholar.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif font-bold text-sm text-[#0f2933] truncate">
                            {scholar.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {scholar.work}
                          </p>
                        </div>
                      </div>

                      <div className="text-[10px] text-[#0d9488] border-t border-[#0d9488]/20 pt-1.5 mt-1 font-medium">
                        {scholar.symbolName}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-3">
                <button
                  disabled={selectedIds.length !== 3}
                  onClick={() => {
                    setStep('reasons');
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] disabled:opacity-40 disabled:cursor-not-allowed text-white font-serif font-bold text-sm rounded-xl shadow-lg transition-all shadow-teal-700/20"
                >
                  Gerekçeleri Belirleyiniz (2/3)
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: REASONS FOR EACH SELECTED FIGURE */}
          {step === 'reasons' && (
            <div className="space-y-5">
              <div className="p-4 bg-[#f0fdfa] border border-[#0d9488]/30 rounded-2xl">
                <h3 className="font-serif font-bold text-sm text-[#0f766e]">
                  Seçtiğiniz 3 Âlim İçin Gerekçelerinizi Belirleyiniz:
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Her âlim için medeniyete etkisini en iyi açıklayan gerekçeyi işaretleyiniz.
                </p>
              </div>

              <div className="space-y-4">
                {selectedIds.map((scholarId) => {
                  const scholar = SCHOLARS_DATA.find((s) => s.id === scholarId);
                  if (!scholar) return null;
                  const reasonOptions = scholarReasonsMap[scholarId] || [];
                  const chosenReason = reasons[scholarId];

                  return (
                    <div
                      key={scholarId}
                      className="p-4 bg-white border-2 border-[#0d9488]/25 rounded-2xl space-y-3 shadow-xs"
                    >
                      <div className="flex items-center space-x-3 font-serif font-bold text-sm text-[#0f766e]">
                        <img
                          src={`${import.meta.env.BASE_URL}images/scholars/avatars/${scholarId}.png`}
                          alt={scholar.name}
                          className="w-8 h-8 rounded-full border-2 border-[#0d9488]/40 object-cover shadow-xs"
                        />
                        <span>{scholar.name} İçin Gerekçeniz:</span>
                      </div>

                      <div className="space-y-2">
                        {reasonOptions.map((reasonText, idx) => {
                          const isChosen = chosenReason === reasonText;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleSetReason(scholarId, reasonText)}
                              className={`w-full p-3 text-left rounded-xl border text-xs leading-relaxed transition-all ${
                                isChosen
                                  ? 'bg-[#e0f2f1] border-2 border-[#0d9488] text-[#0f766e] font-bold shadow-xs'
                                  : 'bg-[#f8fafc] border border-[#0d9488]/20 text-slate-700 hover:bg-[#f0fdfa] hover:border-[#0d9488]'
                              }`}
                            >
                              <div className="flex items-start space-x-2.5">
                                <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                                  {isChosen ? '✓' : idx + 1}
                                </span>
                                <span>{reasonText}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep('select3')}
                  className="text-xs text-[#0f766e] hover:text-[#115e59] font-medium"
                >
                  ← Âlim Seçimine Dönünüz
                </button>

                <button
                  disabled={!isAllReasonsSelected}
                  onClick={() => {
                    setStep('thesis');
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] disabled:opacity-40 disabled:cursor-not-allowed text-white font-serif font-bold text-sm rounded-xl shadow-lg transition-all shadow-teal-700/20"
                >
                  Sentezi Yazınız (3/3)
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: FINAL THESIS STATEMENT */}
          {step === 'thesis' && (
            <div className="space-y-5">
              <div className="p-4 bg-[#f0fdfa] border border-[#0d9488]/30 rounded-2xl">
                <div className="text-[#0d9488] font-serif font-bold text-xs uppercase tracking-wider">
                  Büyük Sentez ve Değerlendirme
                </div>
                <h3 className="font-serif font-bold text-base text-[#0f2933] mt-1">
                  “Türkistan’dan Anadolu’ya uzanan süreçte Türk-İslam medeniyetinin Anadolu üzerindeki etkisini tek bir cümleyle ifade ediniz.”
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  İncelediğiniz kanıtları; dil, bilim, ahlak ve tasavvufi gelişmeleri sentezleyerek değerlendirmenizi oluşturunuz.
                </p>
              </div>

              {/* Textarea */}
              <div>
                <label className="block text-xs font-serif font-bold text-[#0f2933] mb-2">
                  Sentez Cümleniz:
                </label>
                <textarea
                  value={thesisStatement}
                  onChange={(e) => setThesisStatement(e.target.value)}
                  placeholder="Örnek: Türkistan'dan Anadolu'ya uzanan düşünce ve bilim birikimi; arı Türkçe, tasavvufi hoşgörü ve kurumsal yapılarla Anadolu'nun kalıcı bir Türk-İslam yurdu haline gelmesini sağlamıştır."
                  rows={4}
                  className="w-full p-3.5 bg-white border-2 border-[#0d9488]/30 focus:border-[#0d9488] rounded-2xl text-sm text-[#0f2933] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d9488]/20 leading-relaxed resize-none shadow-xs"
                />
                <span className="block text-[11px] text-slate-500 mt-1">
                  En az 10 karakter yazarak sentezinizi ifade ediniz.
                </span>
              </div>

              {/* Summary of chosen 3 */}
              <div className="p-3.5 bg-[#f0fdfa] border border-[#0d9488]/25 rounded-2xl text-xs space-y-1">
                <span className="font-serif font-bold text-[#0f766e]">
                  Belirlediğiniz 3 Öncü Âlim:
                </span>
                <div className="flex flex-wrap gap-2.5 mt-2">
                  {selectedIds.map((id) => {
                    const s = SCHOLARS_DATA.find((item) => item.id === id);
                    return (
                      <div
                        key={id}
                        className="px-3 py-1.5 bg-white text-[#0f2933] border border-[#0d9488]/30 rounded-xl font-serif flex items-center space-x-2 shadow-xs"
                      >
                        <img
                          src={`${import.meta.env.BASE_URL}images/scholars/avatars/${id}.png`}
                          alt={s?.name}
                          className="w-5 h-5 rounded-full object-cover border border-[#0d9488]/40"
                        />
                        <span className="text-xs font-medium">{s?.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep('reasons')}
                  className="text-xs text-[#0f766e] hover:text-[#115e59] font-medium"
                >
                  ← Gerekçelere Dönünüz
                </button>

                <button
                  disabled={thesisStatement.trim().length < 8}
                  onClick={handleSubmit}
                  className="px-7 py-3 bg-gradient-to-r from-[#0d9488] via-[#0f766e] to-[#0284c7] hover:from-[#0f766e] hover:to-[#0369a1] disabled:opacity-40 disabled:cursor-not-allowed text-white font-serif font-bold text-sm rounded-xl shadow-lg shadow-teal-700/25 transition-all"
                >
                  Değerlendirme Raporunu Tamamlayınız
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
