---
to: src/reducers/__proto__.ts
unless_exists: true
---
export class INITIAL_GLOBAL {
  constructor(data: any = {}) {
    this.userName = data.userName || '';
  }
  userName: string;
}

export class INITIAL_PERSISTED {
  constructor(data: any = {}) {
    this.token = data.token || '';
    this.name = data.name || '';
    this.bool = data.bool || false;
  }
  token: string;
  name: string;
  bool: boolean;
}
