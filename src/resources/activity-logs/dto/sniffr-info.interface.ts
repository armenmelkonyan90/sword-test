export interface SniffrInfoInterface {
  browser: InfoInterface;
  os: InfoInterface;
  device: InfoInterface;
}

export interface InfoInterface {
  name: string;
  version: number[];
  versionString: string;
}
