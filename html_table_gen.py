import numpy as np
import pandas as pd
COLUMN_NORMS={
    "cholesterol całkowity": (3.0,5.2),
    "HDL":(1.0,100),
    "LDL":(0,2.5),
    "trójglicerydy":(0,1.7),
    "hemoglobina":(4.2,5.4),
    "hematokryt":(40,54),
    "WBC":(4000,10000),
    "OB.":(3,15),
    "CRP":(0,5),
    "mocznik":(2.0,6.7),
    "kreatynina":(0.6,1.3),
    "eGFR":(1.73, 90),
    "kwas moczowy": (3,7),
    "CKMB":(24,195),
    "INR":(0.85,1.15),
    "prokalcytonina":(0,0.1),
    "NT-proBNP":(68,112),
    "APTT":(26,36),
    "fibrynogen":(1.8,3.5),
    "AT III":(85,100),
    "płyki krwi":(150000,400000)
}

COLUMN_JEDNOSTKI={
    "cholesterol całkowity": "mmol/l",
    "HDL":"mmol/l",
    "LDL":"mmol/l",
    "trójglicerydy":"mmol/l",
    "hemoglobina":"mikrolitr",
    "hematokryt":"%",
    "WBC":"mikrolitr",
    "OB.":"mm/h",
    "CRP":"mmol/l",
    "mocznik":"mg/dl",
    "kreatynina":"mg/dl",
    "eGFR":"ml/min",
    "kwas moczowy":"mg/dl",
    "CKMB":" IU/I",
    "INR":"1",
    "prokalcytonina":"mikrogram/l",
    "NT-proBNP":"pg/ml",
    "APTT":"s",
    "fibrynogen":"g/l",
    "AT III":"%",
    "płyki krwi":"mikrolitr"
}

def raw_data2info_data_lekarz(lakarz = pd.read_excel('b.xlsx')):
    idx=0
    df = pd.DataFrame()
    for column in lakarz:
            surowe_dane = list(lakarz[column])
            if column == 'lp' :
                df.insert(loc=idx, column=column + "", value=surowe_dane)
                idx+=1
                continue

            tendencja=[]
            odchylenie_od_sredniej = []
            for i in range(len(surowe_dane)):
                if( i == 0 ):
                    tendencja.append("")
                    if(surowe_dane[i] > COLUMN_NORMS[column][1]):
                        odch=(surowe_dane[i] - COLUMN_NORMS[column][1])/COLUMN_NORMS[column][1]
                        odch*=100
                        odchylenie_od_sredniej.append(str(round(odch,3))+" %")
                    else:

                        if (surowe_dane[i] < COLUMN_NORMS[column][0]):
                            odch = (surowe_dane[i] - COLUMN_NORMS[column][0]) / COLUMN_NORMS[column][0]
                            odch *= 100
                            odchylenie_od_sredniej.append(str(round(odch,3))+" %")
                        else:
                            odchylenie_od_sredniej.append("w normie")
                else :
                    tdj = surowe_dane[i]-surowe_dane[i-1]
                    tendencja.append(str(round(tdj,3)))
                    if (surowe_dane[i] > COLUMN_NORMS[column][1]):
                        odch = (surowe_dane[i] - COLUMN_NORMS[column][1]) / COLUMN_NORMS[column][1]
                        odch *= 100
                        odchylenie_od_sredniej.append(str(round(odch,3)) + " %")
                    else:

                        if (surowe_dane[i] < COLUMN_NORMS[column][0]):
                            odch = (surowe_dane[i] - COLUMN_NORMS[column][0]) / COLUMN_NORMS[column][0]
                            odch *= 100
                            odchylenie_od_sredniej.append(str(round(odch,3)) + " %")
                        else:
                            odchylenie_od_sredniej.append("w normie")
            df.insert(loc=idx, column=column+" ("+COLUMN_JEDNOSTKI[column]+")", value=surowe_dane)
            idx+=1
            df.insert(loc=idx, column=column+" różnica"+" ("+COLUMN_JEDNOSTKI[column]+")", value=tendencja)
            idx += 1
            df.insert(loc=idx, column=column + " odchylenie od średniej", value=odchylenie_od_sredniej)
            idx += 1
    #df.to_excel("output.xlsx",)
    return df.to_json(force_ascii=False)
