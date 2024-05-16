/*
https://leetcode.com/problems/minimum-cost-to-hire-k-workers/description/
*/
class Worker {
    quality: number;
    wage: number;
    ratio: number;

    constructor(quality: number, wage: number) {
        this.quality = quality;
        this.wage = wage;
        this.ratio = wage/quality;
    }
}

function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
    const n: number = quality.length;
    const workers: Worker[] = [];

    for(let i = 0; i<n; i++){
        workers.push(new Worker(quality[i], wage[i]));
    }

    workers.sort((a,b)=>a.ratio-b.ratio);

    let res = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let workerQ:number[] = [];

    for(const worker of workers){
        workerQ.push(worker.quality);
        sum = sum+worker.quality;

        if(workerQ.length > k){
            workerQ.sort((a,b)=>b-a);
            sum = sum-workerQ.shift()!;
        }
        if(workerQ.length == k){
            res = Math.min(res, sum*worker.ratio);
        }
    }
    return res;
};
