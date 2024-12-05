import fs from "fs";
export function secondsToString(seconds: number) {
  let hour = Math.floor(seconds / 3600) as any;
  hour = hour < 10 ? "0" + hour : hour;
  let minute = Math.floor((seconds / 60) % 60) as any;
  minute = minute < 10 ? "0" + minute : minute;
  let second = (seconds % 60) as any;
  second = second < 10 ? "0" + second : second;
  return hour + ":" + minute + ":" + second;
}

export function guardarLog(nombreArchivoLog: string, mensaje: string) {
  if (!fs.existsSync("./logs")) fs.mkdirSync("./logs");
  fs.writeFileSync(`./logs/${nombreArchivoLog}.log`, mensaje, { flag: "a+" });
}

export const querySql = (nombreArchivoSql: string) =>
  fs
    .readFileSync(`./src/sql/${nombreArchivoSql}.sql`, "utf-8")
    .replace(/[\r\n]/g, " ");

export const mapVariables = (result: any[]) =>
  result?.map((d) =>
    Object.fromEntries(
      Object.entries(d).map((o) => [
        o[0].toLowerCase().replace(/_./g, (x) => x[1].toUpperCase()),
        o[1],
      ])
    )
  );

export const agrupadorGenerico = ({
  data,
  nombreIdentificador,
  columnasParaAgrupar,
  nombreVariableAgrupada,
}: {
  data: any[];
  nombreIdentificador: string;
  columnasParaAgrupar: string[];
  nombreVariableAgrupada: string;
}) =>
  [...new Set(data.map((d) => d[nombreIdentificador]))]
    .map((_) => ({
      ...data.find((d) => d[nombreIdentificador] === _),
      [nombreVariableAgrupada]: data
        .filter(
          (d) => d[nombreIdentificador] === _ && d[columnasParaAgrupar[0]]
        )
        .map((d) =>
          Object.fromEntries(
            Object.entries(d).filter((t) => columnasParaAgrupar.includes(t[0]))
          )
        ),
    }))
    .map((d) =>
      Object.fromEntries(
        Object.entries(d).filter((t) => !columnasParaAgrupar.includes(t[0]))
      )
    );

export const downloadFile = ({
  url = "",
  fileName = "PDF-file.pdf",
  setLoadding = (_: boolean) => {},
}: {
  url: string;
  fileName: string;
  setLoadding: (_: boolean) => void;
}) => {
  setLoadding(true);
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/pdf",
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);

      link.click();

      link.parentNode?.removeChild(link);
    })
    .finally(() => {
      setLoadding(false);
    });
};
